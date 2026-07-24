import MermaidDiagram from "./MermaidDiagram";

function DesignOutput({ design }) {

    return (

        <div className="output">

            <section>
                <h2>Overview</h2>
                <p>{design.overview}</p>
            </section>

            <section>
                <h2>Functional Requirements</h2>
                <ul>
                    {design.functional_requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Non Functional Requirements</h2>
                <ul>
                    {design.non_functional_requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Architecture</h2>
                <p>{design.architecture}</p>
            </section>

            <section>
                <h2>Services</h2>

                {design.services.map((service, index) => (

                    <div key={index} className="service-card">

                        <h3>{service.name}</h3>

                        <p>{service.responsibility}</p>

                    </div>

                ))}
            </section>

            <section>

                <h2>Database</h2>

                <p>{design.database}</p>

            </section>

            <section>

                <h2>API Endpoints</h2>

                <table>

                    <thead>

                        <tr>

                            <th>Method</th>

                            <th>Endpoint</th>

                            <th>Description</th>

                        </tr>

                    </thead>

                    <tbody>

                        {design.apis.map((api, index) => (

                            <tr key={index}>

                                <td>{api.method}</td>

                                <td>{api.endpoint}</td>

                                <td>{api.description}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </section>

            <section>

                <h2>Cache</h2>

                <p>{design.cache}</p>

            </section>

            <section>

                <h2>Message Queue</h2>

                <p>{design.message_queue}</p>

            </section>

            <section>

                <h2>Tradeoffs</h2>

                <ul>

                    {design.tradeoffs.map((item, index) => (

                        <li key={index}>{item}</li>

                    ))}

                </ul>

            </section>

            <section>

                <h2>Bottlenecks</h2>

                <ul>

                    {design.bottlenecks.map((item, index) => (

                        <li key={index}>{item}</li>

                    ))}

                </ul>

            </section>

            <section>

                <h2>Architecture Diagram</h2>

                <MermaidDiagram chart={design.mermaid_diagram} />

            </section>

        </div>

    );

}

export default DesignOutput;