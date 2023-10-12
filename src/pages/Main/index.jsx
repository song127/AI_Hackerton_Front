import { css } from "@emotion/react";
import styled from "@emotion/styled";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import Column from "components/utils/Column";
import Divider from "components/utils/Divider";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useState } from "react";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import ChatInput from "./ChatInput";
import RoundBtn from "components/global/RoundBtn";
import Row from "components/utils/Row";

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

const InnerTitle = styled.p`
  align-self: center;
  ${GlobalFont({
    size: 25,
    align: LayerAlign.center,
    weight: 600,
  })}
`;

const InnerOption = styled.p`
  ${GlobalFont({
    size: 25,
    align: LayerAlign.start,
    weight: 500,
    height: 40,
    lineB: "nowrap",
  })}
`;

const InnerOptionValue = styled.p`
  ${GlobalFont({
    size: 25,
    align: LayerAlign.start,
    weight: 300,
    height: 40,
  })}
`;

const Profile = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid ${({ color }) => color};
  background: ${COLORS.white};
`;

const ProfileText = styled.div`
  margin-top: 21px;
  ${GlobalFont({
    size: 20,
    weight: 500,
    lineB: "nowrap",
  })}
`;

const ChatContainer = styled.div`
  position: relative;

  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  width: 100%;
  height: max-content;

  padding: 0px 6px;
`;

const UserLine = styled.div`
  position: absolute;
  left: ${({ margin }) => `${margin}px`};

  width: 1px;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const UserChatBubble = styled.div`
  z-index: 1;
  width: 100%;

  border: 1px solid #000;
  background: #fff;

  padding: 24px 21px;
  margin-top: 35px;

  white-space: pre-wrap;
`;

const ChatBubble = styled.div`
  position: relative;
  left: ${({ margin }) => `${margin}px`};

  display: flex;
  align-items: center;
  justify-content: start;

  width: 450px;
  height: max-content;

  padding: 16px 21px;
  margin-top: 35px;

  word-break: break-all;

  ${({ backColor, borderColor }) => css`
    background-color: ${backColor};
    border: 1px solid ${borderColor};
  `}
`;

const colorIndex = [
  { backColor: COLORS.yellow_1, borderColor: COLORS.yellow_2 },
  { backColor: COLORS.blue_1, borderColor: COLORS.blue_2 },
  { backColor: COLORS.red_1, borderColor: COLORS.red_2 },
  { backColor: COLORS.purple_1, borderColor: COLORS.purple_2 },
];
const marginPixel = [0, 112, 386, 534];
const lineMarginPixel = [80, 340, 622, 924];

function MainPage() {
  const [messages, setMessages] = useState([
    {
      user: 0,
      text: "hello0sssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
    { user: 1, text: "hello1" },
    { user: 2, text: "hello2" },
    { user: -1, text: "user1" },
    { user: 3, text: "hello3" },
    { user: 1, text: "hello1" },
    { user: 0, text: "hello0" },
  ]);
  const [selectedList, setSelectedList] = useState(Array(4).fill(false));
  const [chatting, setChatting] = useState("");

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
        <BackBoard>
          <InnerTitle>Brainstorming session:</InnerTitle>

          <Block h={40} />
          <AllFullRow>
            <InnerOption>Service Name:</InnerOption>

            <Block w={4} />
            <InnerOptionValue>MedBot Analytics</InnerOptionValue>
          </AllFullRow>
          <AllFullRow>
            <InnerOption>Problem:</InnerOption>

            <Block w={4} />
            <InnerOptionValue>
              Ineffective tracking and predictive analysis of patient health,
              leading to delayed treatments.
            </InnerOptionValue>
          </AllFullRow>
          <AllFullRow>
            <InnerOption>Service Idea:</InnerOption>

            <Block w={4} />
            <InnerOptionValue>
              Develop an AI-driven platform that uses machine learning to
              predict potential health issues based on patient medical history,
              current vitals, and other relevant data, enabling proactive
              medical treatments.
            </InnerOptionValue>
          </AllFullRow>

          <Block h={63} />
          <Divider thick={2} c={COLORS.black} />

          <Block h={72} />
          <AllFullRow main={LayerAlign.center}>
            <Block w={21} />
            <Column>
              <Profile color={COLORS.yellow_1} />
              <ProfileText>Pat(VC)</ProfileText>
            </Column>

            <Block w={108} />
            <Column>
              <Profile color={COLORS.blue_1} />
              <ProfileText>Lily(VC)</ProfileText>
            </Column>
            <Block w={108} />
            <Column>
              <Profile color={COLORS.red_1} />
              <ProfileText>Steve(Tech Expert)</ProfileText>
            </Column>
            <Block w={108} />
            <Column>
              <Profile color={COLORS.purple_1} />
              <ProfileText>Casey(Consumer)</ProfileText>
            </Column>
          </AllFullRow>

          <Block h={40} />
          <ChatContainer>
            <UserLine color={COLORS.yellow_1} margin={lineMarginPixel[0]} />
            <UserLine color={COLORS.blue_1} margin={lineMarginPixel[1]} />
            <UserLine color={COLORS.red_1} margin={lineMarginPixel[2]} />
            <UserLine color={COLORS.purple_1} margin={lineMarginPixel[3]} />
            {messages.map((value, index) => {
              const user = value.user;
              const text = value.text;
              if (user != -1) {
                return (
                  <ChatBubble
                    key={index}
                    margin={marginPixel[user]}
                    backColor={colorIndex[user].backColor}
                    borderColor={colorIndex[user].borderColor}
                  >
                    {text}
                  </ChatBubble>
                );
              } else {
                return <UserChatBubble>{text}</UserChatBubble>;
              }
            })}

            <Block h={80} />
          </ChatContainer>

          <ChatInput
            chatting={chatting}
            setChatting={setChatting}
            seletedList={selectedList}
            setSelectedList={setSelectedList}
            onSubmit={() => {
              const message = { user: -1, text: chatting };
              let newMessages = [...messages];
              newMessages.push(message);
              setMessages(newMessages);
            }}
          />

          <Block h={15} />
          <div style={{ alignSelf: "end" }}>
            <RoundBtn>skip my turn</RoundBtn>
          </div>
        </BackBoard>

        <Block h={30}/>
        <AllFullRow main={LayerAlign.end}>
          <RoundBtn>Back</RoundBtn>

          <Block w={12} />
          <RoundBtn>Next</RoundBtn>
        </AllFullRow>
        <Block h={135} />
      </InnerLayout>
    </BasicLayout>
  );
}

export default MainPage;
