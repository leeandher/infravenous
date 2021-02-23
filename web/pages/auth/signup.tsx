import styled from "styled-components";
import SignUpForm from "../../components/SignUpForm";
import { NavPage } from "../../components/Page";
import { NavHero } from "../../components/base";

export default function SignInPage() {
  return (
    <NavPage>
      <NavHero>
        <div className="item">
          <SignUpForm />
        </div>
      </NavHero>
    </NavPage>
  );
}
