import { Drawer } from "antd";
import { useContext } from "react";
import { MyContext } from "../context/Context";

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
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer title="Basic Drawer" onClose={onClose} open={userModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default SignInModal;
