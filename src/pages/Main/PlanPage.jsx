import RoundBtn from "components/global/RoundBtn";
import {
  InnerOption,
  InnerOptionValue,
  InnerTitle,
} from "components/global/Texts";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import { LayerAlign } from "components/utils/WidgetUtils";

function PlanPage({ data }) {
  return (
    <>
      <InnerTitle>Finalized business plan for you</InnerTitle>

      <Block h={30} />
      <AllFullRow>
        <InnerOption>Business Plan:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>GreenTech Monitor</InnerOptionValue>
      </AllFullRow>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Executive Summary:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>Service Name: GreenTech Monitor</InnerOptionValue>
      </AllFullRow>
      <AllFullRow>
        <InnerOption>Mission:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>
          Reduce carbon footprints by optimizing energy consumption in
          residential and commercial spaces through AI-driven devices.
        </InnerOptionValue>
      </AllFullRow>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Problem Statement:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>
          Despite advances in energy-saving technologies, excessive energy
          consumption remains a significant challenge in both residential and
          commercial environments. This leads not only to increased costs but
          also contributes significantly to carbon footprints.
        </InnerOptionValue>
      </AllFullRow>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Solution:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>
          GreenTech Monitor introduces smart devices integrated with advanced AI
          algorithms. These devices:
        </InnerOptionValue>
      </AllFullRow>
      <InnerOptionValue>
        1. Analyze energy consumption patterns.
        <br />
        2. Optimize energy usage based on behavioral patterns.
        <br />
        3. Provide users with data-driven actionable insights to reduce energy
        wastage.
      </InnerOptionValue>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Target Market:</InnerOption>
        <Block w={12} />
      </AllFullRow>
      <InnerOptionValue>
        · Residential homeowners looking to reduce energy bills and their carbon
        footprints.
        <br />
        · Commercial spaces, especially those with fluctuating energy needs such
        as offices, restaurants, and retail stores.
        <br />· Green-conscious organizations aiming for sustainability
        certifications.
      </InnerOptionValue>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Revenue Model:</InnerOption>
      </AllFullRow>
      <InnerOptionValue>
        1. Direct sales of GreenTech Monitor devices. Subscription-based
        services
        <br />
        2. for cloud data analysis and insights. Maintenance and software
        updates
        <br />
        3. for advanced features and integrations.
      </InnerOptionValue>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Go-to-Market Strategy:</InnerOption>
      </AllFullRow>
      <InnerOptionValue>
        Online sales through the GreenTech Monitor website.
        <br />
        Partnerships with utility companies for bundled deals.
        <br />
        Distribution via eco-friendly and home automation retailers.
      </InnerOptionValue>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Competitive Analysis:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>
          While traditional energy monitors exist, the integration of AI to
          provide actionable insights based on behavior is a unique selling
          proposition for GreenTech Monitor.
        </InnerOptionValue>
      </AllFullRow>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Operational Plan:</InnerOption>
      </AllFullRow>
      <InnerOptionValue>
        1. Collaborate with AI specialists and hardware engineers for the
        product development phase.
        <br />
        2. Partner with manufacturing entities to ensure high-quality production
        at competitive costs.
        <br />
        3. Develop a cloud-based platform for data analysis and insights
        generation.
        <br />
        Financial Projections: While initial costs, particularly R&D, might be
        high, the forecasted growth rate post-launch is approximately 20% YoY,
        with a break-even point projected by the second year.
      </InnerOptionValue>

      <Block h={40} />
      <AllFullRow>
        <InnerOption>Conclusion:</InnerOption>
        <Block w={12} />
        <InnerOptionValue>
          GreenTech Monitor is poised to address the crucial issue of excessive
          energy consumption by offering a solution that not only conserves
          energy but educates users on sustainable practices. With an
          eco-conscious market on the rise, the potential for success is
          substantial.
        </InnerOptionValue>
      </AllFullRow>

      <Block h={40} />
      <AllFullRow main={LayerAlign.center}>
        <RoundBtn>Save</RoundBtn>
      </AllFullRow>
    </>
  );
}

export default PlanPage;
