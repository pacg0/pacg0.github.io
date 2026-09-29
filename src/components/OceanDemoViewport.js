import './OceanDemoViewport.css';

export default function OceanDemoViewport() {
  const demoUrl = `${process.env.PUBLIC_URL}/ocean-demo/index.html`;

  return (
    <div className="ocean-demo-wrapper">
      <iframe
        title="Ocean Demo"
        src={demoUrl}
        className="ocean-demo-viewport"
        loading="lazy"
      />
    </div>
  );
}
