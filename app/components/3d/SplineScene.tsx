import Spline from '@splinetool/react-spline/next';

export default function Scene() {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen -z-10">
                <Spline scene="https://prod.spline.design/DaqJ1nOmvbogfCna/scene.splinecode" />
            </div>
        </>
    );
}
