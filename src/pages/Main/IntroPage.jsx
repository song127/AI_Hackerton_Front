import BasicBorderInput from "components/global/BasicBorderInput";
import TextArea from "components/global/TextArea";
import { InnerOption, InnerTitle } from "components/global/Texts";
import AllFullColumn from "components/utils/AllFullColumn";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import SizedBox from "components/utils/SizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";

function IntroPage({ address, setAddress, interest, setInterest }) {
  return (
    <>
      <InnerTitle>Let us get to know you:</InnerTitle>

      <Block h={40} />
      <AllFullColumn cross={LayerAlign.center}>
        <InnerOption>
          1. Connect your LinkedIn to tailor opportunities to your background.
        </InnerOption>

        <Block h={25} />
        <SizedBox w={680} h={40}>
          <BasicBorderInput value={address} setValue={setAddress} />
        </SizedBox>

        <Block h={52} />
        <InnerOption>
          2. What industry or sector are you interested in?
        </InnerOption>

        <Block h={25} />
        <SizedBox w={680} h={140}>
          <TextArea value={interest} setValue={setInterest} />
        </SizedBox>
      </AllFullColumn>
    </>
  );
}

export default IntroPage;
