import { Drawer } from "antd";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import LoginPopup from "./LoginForm";

const SignInModal: React.FC = () => {
  const { userModal, setUserModal } = useContext(MyContext);

  //   const showDrawer = () => {
  //     setUserModal(true);
  //   };

  const onClose = () => {
    setUserModal(false);
  };

  return (
    <>
      <Drawer
        className="overflow-x-hidden"
        title="Login to your account"
        onClose={onClose}
        open={userModal}
      >
        <LoginPopup />
      </Drawer>
    </>
  );
};

export default SignInModal;
