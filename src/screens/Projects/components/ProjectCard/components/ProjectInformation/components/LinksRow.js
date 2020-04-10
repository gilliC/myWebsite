import React from "react";
import ContainerRow from "../../../../../../../components/ContainerRow";
import IconLink, {
  linkAnimationTypes,
} from "../../../../../../../components/IconLink";

export default (props) => {
  const { gitHubLink, projLinkClassName, projLink } = props;
  const animation = linkAnimationTypes.DOUBLE_CIRCLE;
  const linkWidth = "20%";
  return (
    <ContainerRow>
      <IconLink
        animation={animation}
        className="fab fa-github"
        href={gitHubLink}
        width={linkWidth}
      />
      <IconLink
        animation={animation}
        className={projLinkClassName}
        href={projLink}
        width={linkWidth}
      />
    </ContainerRow>
  );
};
