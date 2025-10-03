pipeline {
    // This specifies where the pipeline will run. 'any' means any available agent.
    agent any
    
    // The tools block can define tools like Git if they're not in the agent's PATH
//    tools {
//        git 'Default' // Assumes the default Git installation is available
//    }

    // A stage is a logical division of the pipeline, like Build, Test, or Deploy.
    stages {
        stage('Build') {
            steps {
                // Use the secretFile credential type and give the file a name
                withCredentials([file(credentialsId: 'MY_PORTFOLIO_ENV', variable: 'MY_PORTFOLIO_ENV_VAR')]) {
                    // The withCredentials block makes the key file available in a temporary path
                    // Now copy that file to the location your Dockerfile expects
                    sh 'ls -la && install -m 600 "$MY_PORTFOLIO_ENV_VAR" ./.env'
                }
                // Now run the build command, which will find the new keyfile
                sh 'docker compose build'
            }
        }

        stage('Shut Down') {
            steps {
                // 'docker-compose down' stops and removes all containers and networks
                sh 'docker compose down'
            }
        }

        stage('Deploy') {
            steps {
                // This command starts the containers in detached mode (-d).
                // It will recreate any containers whose images were just built.
                sh 'docker compose up -d'
            }
        }
    }

    // The 'post' block defines actions to take after the pipeline has finished.
    post {
        success {
            echo 'Pipeline succeeded! Your application is live.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}