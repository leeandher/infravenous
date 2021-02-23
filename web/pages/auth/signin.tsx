import styled from "styled-components";
import SignInForm from "../../components/SignInForm";
import { NavHero } from "../../components/base";
import { NavPage } from "../../components/Page";

export default function SignInPage() {
  return (
    <NavPage>
      <NavHero>
        <div className="item">
          <SignInForm />
        </div>
      </NavHero>
    </NavPage>
  );
}
