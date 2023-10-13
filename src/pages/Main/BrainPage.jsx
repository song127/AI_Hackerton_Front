import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  InnerOption,
  InnerOptionValue,
  InnerTitle,
  ProfileText,
} from "components/global/Texts";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import Column from "components/utils/Column";
import Divider from "components/utils/Divider";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useEffect, useState } from "react";
import { COLORS } from "styles/global/globalColors";
import ChatInput from "./ChatInput";
import RoundBtn from "components/global/RoundBtn";
import { Profile } from "components/global/Profile";
import { sleep } from "utils/utilsFunctions";
import TypingAnimation from "components/global/TypingAnimation";

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

const testMessages = [
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
];

function BrainPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const [isTyping, setIsTyping] = useState(false);

  // 0: yellow, 1: blue, 2: red, 3: purple, -1: user
  const [messages, setMessages] = useState([]);
  const [selectedList, setSelectedList] = useState(Array(4).fill(false));
  const [chatting, setChatting] = useState("");

  const aiChattingTest = async () => {
    await sleep(1000);
    const message = testMessages[messages.length];
    if (message) {
      setIsTyping(true);
      let newMessages = [...messages];
      newMessages.push(message);
      setMessages(newMessages);
      console.log(newMessages);
    }
  };

  useEffect(() => {
    if (pageIndex == 1) {
      if (!isTyping) aiChattingTest();
      else {
        if (messages[messages.length - 1].user == -1) {
          aiChattingTest();
        }
      }
    }
  }, [isTyping]);

  useEffect(() => {
    if (pageIndex == 1) {
      aiChattingTest();
    }
  }, [pageIndex]);

  if (pageIndex === 0) {
    return (
      <>
        <InnerTitle>Ideas generated for your brainstorming session:</InnerTitle>

        <Block h={40} />
        <AllFullRow>
          <InnerOption>Service Name:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>MedBot Analytics</InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Problem:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>
            Ineffective tracking and predictive analysis of patient health,
            leading to delayed treatments.
          </InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Service Idea:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>
            Develop an AI-driven platform that uses machine learning to predict
            potential health issues based on patient medical history, current
            vitals, and other relevant data, enabling proactive medical
            treatments.
          </InnerOptionValue>
        </AllFullRow>
        <Block h={12} />
        <AllFullRow main={LayerAlign.end}>
          <RoundBtn
            onClick={() => {
              if (pageIndex < 4) {
                setPageIndex(pageIndex + 1);
              }
            }}>
            Select
          </RoundBtn>
        </AllFullRow>

        <Block h={60} />
        <AllFullRow>
          <InnerOption>Service Name:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>MedBot Analytics</InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Problem:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>
            Ineffective tracking and predictive analysis of patient health,
            leading to delayed treatments.
          </InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Service Idea:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>
            Develop an AI-driven platform that uses machine learning to predict
            potential health issues based on patient medical history, current
            vitals, and other relevant data, enabling proactive medical
            treatments.
          </InnerOptionValue>
        </AllFullRow>
        <Block h={12} />
        <AllFullRow main={LayerAlign.end}>
          <RoundBtn
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}>
            Select
          </RoundBtn>
        </AllFullRow>

        <Block h={60} />
        <AllFullRow>
          <InnerOption>Service Name:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>MedBot Analytics</InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Problem:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>
            Ineffective tracking and predictive analysis of patient health,
            leading to delayed treatments.
          </InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Service Idea:</InnerOption>
          <Block w={10} />
          <InnerOptionValue>
            Develop an AI-driven platform that uses machine learning to predict
            potential health issues based on patient medical history, current
            vitals, and other relevant data, enabling proactive medical
            treatments.
          </InnerOptionValue>
        </AllFullRow>
        <Block h={12} />
        <AllFullRow main={LayerAlign.end}>
          <RoundBtn
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}>
            Select
          </RoundBtn>
        </AllFullRow>

        <Block h={30}/>
        <AllFullRow main={LayerAlign.center}>
          <RoundBtn
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}>
            Re-Generate
          </RoundBtn>
        </AllFullRow>
      </>
    );
  } else {
    return (
      <>
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
            Develop an AI-driven platform that uses machine learning to predict
            potential health issues based on patient medical history, current
            vitals, and other relevant data, enabling proactive medical
            treatments.
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
            if (user !== -1) {
              return (
                <ChatBubble
                  key={index}
                  margin={marginPixel[user]}
                  backColor={colorIndex[user].backColor}
                  borderColor={colorIndex[user].borderColor}>
                  <TypingAnimation
                    message={text}
                    isT={isTyping}
                    setIsTyping={setIsTyping}
                  />
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
      </>
    );
  }
}

export default BrainPage;
