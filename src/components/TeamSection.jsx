import "../styles.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-divider"></div>

      <div className="team-member">
        <div className="team-image">
          <img src="/doug-terc.png" alt="Douglas Terc" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Douglas Terc</h3>
          <p className="team-bio">
          Douglas Terc is Chief Executive Officer of Cutting Edge Consulting, responsible for driving growth, managing financials and enterprise relationship management. In addition, Doug works in Financial Operations at MedShift, a medical-technology startup, where he helps innovate, structure data and streamline critical processes. Prior to MedShift, Doug engineered Financial Reports at RXO, Inc. where he leveraged data to deliver effective Operational & Performance Reporting to Senior and C-Suite level financial leadership.<br />
          <br />
          With years of experience integrating tech, numbers and effective communication, Douglas specializes in not just delivering solutions, but communicating those solutions in a digestible way for decision makers and business owners. Douglas founded Cutting Edge Consulting with this approach in mind – work with business owners to digest and understand complex solutions.
          </p>
        </div>
      </div>

      <div className="team-divider"></div>

      <div className="team-member">
        <div className="team-image">
          <img src="/timin-sonik.png" alt="Timin Sonik" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Timin Sonik</h3>
          <p className="team-bio">
          Timin Sonik is Chief Operating Officer of Cutting Edge Consulting, responsible for overseeing operations, managing teams and partnerships and strategical optical management. In addition, Timin brokers Commercial Real Estate in sectors of Industrial, Office, Flex and Development where he leverages data to analyze markets for opportunities to deliver effective creative solutions for clients and investors.<br />
          <br />
          Strategic Out-of-Box thinker with in-depth knowledge in various industries spanning healthcare, insurance, real estate, automotive etc. Background with keen detail orientation around operations and optimization, leveraging technology to surface key pain-points. With strong relationship background, ability to build rapport effectively and efficiently with any individual comes naturally and at ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;