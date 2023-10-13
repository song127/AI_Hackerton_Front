import styled from "@emotion/styled";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useState } from "react";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import RoundBtn from "components/global/RoundBtn";
import BrainPage from "./BrainPage";
import TeamPage from "./TeamPage";
import IntroPage from "./IntroPage";
import PlanPage from "./PlanPage";
import PageTitle from "components/global/PageTitle";
import { ReactComponent as RightArrow } from "asssets/icons/ic-right_arrow.svg";

const RightArrowIcon = styled(RightArrow)`
  width: 40px;
`;

const Title = styled.p`
  ${GlobalFont({
    size: 40,
    align: LayerAlign.center,
    weight: 600,
  })}
`;

const SubTitle = styled.p`
  ${GlobalFont({
    size: 30,
    align: LayerAlign.center,
    weight: 400,
  })}
`;

const BackBoard = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  width: 100%;
  height: max-content;
  border: 2px solid ${COLORS.orange};

  padding: 34px 75px;
  box-sizing: border-box;
`;

function MainPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");

  return (
    <BasicLayout>
      <InnerLayout>
        <Title>ATZERO</Title>

        <Block h={30} />
        <SubTitle>
          We help you identify unmet customer needs to find a business
          opportunity.
        </SubTitle>

        <Block h={40} />
        <AllFullRow main="space-between" cross={LayerAlign.center}>
          <PageTitle isSelected={pageIndex == 0}>Our Team</PageTitle>
          <RightArrowIcon />

          <PageTitle isSelected={pageIndex == 1}>Your Intro</PageTitle>
          <RightArrowIcon />

          <PageTitle isSelected={pageIndex == 2}>Brainstorm</PageTitle>

          <RightArrowIcon />
          <PageTitle isSelected={pageIndex == 3}>Business Plan</PageTitle>
        </AllFullRow>

        <Block h={40} />
        <BackBoard>
          {(() => {
            switch (pageIndex) {
              case 0:
                return <TeamPage />;
              case 1:
                return (
                  <IntroPage
                    address={address}
                    setAddress={setAddress}
                    interest={interest}
                    setInterest={setInterest}
                  />
                );
              case 2:
                return <BrainPage />;
              case 3:
                return <PlanPage />;
              default:
                return <>null</>;
            }
          })()}
        </BackBoard>

        <Block h={30} />
        <AllFullRow main={LayerAlign.end}>
          {pageIndex != 0 ? (
            <RoundBtn
              onClick={() => {
                if (pageIndex > 0) {
                  setPageIndex(pageIndex - 1);
                }
              }}>
              Back
            </RoundBtn>
          ) : (
            <></>
          )}

          <Block w={12} />
          <RoundBtn
            onClick={() => {
              if (pageIndex < 4) {
                setPageIndex(pageIndex + 1);
              }
            }}>
            {pageIndex !== 3 ? "Next" : "Finish"}
          </RoundBtn>
        </AllFullRow>
        <Block h={135} />
      </InnerLayout>
    </BasicLayout>
  );
}

export default MainPage;
