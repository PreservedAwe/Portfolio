pipeline {
    agent any

    environment {
        APP_NAME   = "my-portfolio"
        NETWORK    = "shared-network"
        PORT       = "3000"
        HEALTH_ENDPOINT = "/"  // <-- dynamic endpoint for curl
    }

    stages {

        stage('Determine Target') {
            steps {
                script {
                    def blueRunning = sh(
                        script: "docker ps --format '{{.Names}}' | grep -q '${APP_NAME}_blue' && echo yes || echo no",
                        returnStdout: true
                    ).trim()

                    if (blueRunning == "yes") {
                        env.ACTIVE = "blue"
                        env.NEXT = "green"
                    } else {
                        env.ACTIVE = "green"
                        env.NEXT = "blue"
                    }

                    echo "Active: ${env.ACTIVE}, Next: ${env.NEXT}"
                }
            }
        }

        stage('Deploy Next Stack') {
            steps {
                // Use the secretFile credential type and give the file a name
                withCredentials([file(credentialsId: 'MY_PORTFOLIO_ENV', variable: 'MY_PORTFOLIO_ENV_VAR')]) {
                    // The withCredentials block makes the key file available in a temporary path
                    // Now copy that file to the location your Dockerfile expects
                    sh 'ls -la && install -m 600 "$MY_PORTFOLIO_ENV_VAR" ./.env'
                }

                sh """
                    docker compose -f docker-compose.${env.NEXT}.yml build
                    docker compose -f docker-compose.${env.NEXT}.yml up -d
                """
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def retries = 50
                    def success = false
                    def nextService = "${APP_NAME}_${env.NEXT}"

                    for (int i = 0; i < retries; i++) {
                        def status = sh(
                            script: "curl -s -o /dev/null -w '%{http_code}' http://${nextService}:${PORT}${HEALTH_ENDPOINT} || echo fail",
                            returnStdout: true
                        ).trim()

                        if (status == "200") {
                            success = true
                            break
                        }
                        echo "Health check failed, retrying..."
                        sleep 3
                    }

                    if (!success) {
                        error "❌ New stack ${env.NEXT} failed health check!"
                    }
                }
            }
        }

        stage('Swap Alias') {
            steps {
                script {
                    echo "🔄 Swapping network alias: ${APP_NAME} from ${env.ACTIVE} → ${env.NEXT}"

                    sh """
                        # Get the new container ID
                        NEW_CID=\$(docker ps -qf name=${APP_NAME}_${env.NEXT})
                        if [ -z "\$NEW_CID" ]; then
                            echo "❌ New container not found!"
                            exit 1
                        fi

                        # Remove any existing alias ${APP_NAME} from the new container
                        echo "Removing old alias from new container if it exists"
                        docker network disconnect ${NETWORK} \$NEW_CID || true

                        # Remove alias from any other container currently using it
                        EXISTING_CIDS=\$(docker network inspect ${NETWORK} -f '{{range \$id, \$c := .Containers}}{{\$c.Name}} {{end}}' | tr ' ' '\\n' | grep -w ${APP_NAME} || true)
                        if [ -n "\$EXISTING_CIDS" ]; then
                            echo "Disconnecting old container(s) currently using alias ${APP_NAME}: \$EXISTING_CIDS"
                            for cid in \$EXISTING_CIDS; do
                                docker network disconnect ${NETWORK} \$cid || true
                            done
                        fi

                        # Connect alias to the new container
                        echo "Connecting alias ${APP_NAME} to new container \$NEW_CID"
                        docker network connect --alias ${APP_NAME} ${NETWORK} \$NEW_CID
                    """
                }
            }
        }

        stage('Shutdown Old Stack') {
            steps {
                sh """
                    docker compose -f docker-compose.${env.ACTIVE}.yml down || true
                """
            }
        }
    }

    post {
        success { echo "✅ ${APP_NAME} deployed successfully!" }
        failure { echo "❌ Deployment failed!" }
    }
}
