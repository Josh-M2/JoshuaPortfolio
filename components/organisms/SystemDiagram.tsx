export function SystemDiagram() {
  return (
    <figure className="system-diagram">
      <div className="system-diagram__header">
        <span>A view of my work</span>
        <span>Interface → Services → Cloud workflows</span>
      </div>
      <div className="system-diagram__flow">
        <div className="system-diagram__node">
          <strong>Product interface</strong>
          <span>React · Next.js</span>
        </div>
        <span className="system-diagram__connector" aria-hidden="true" />
        <div className="system-diagram__node">
          <strong>Typed services</strong>
          <span>TypeScript · Node.js</span>
        </div>
        <span className="system-diagram__connector" aria-hidden="true" />
        <div className="system-diagram__node">
          <strong>Cloud workflows</strong>
          <span>AWS Lambda · DynamoDB · Step Functions</span>
        </div>
      </div>
      <figcaption>
        A conceptual view of the areas I work across, based on my CV. It is not a diagram of a specific client system.
      </figcaption>
    </figure>
  );
}
