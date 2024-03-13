import React = require("react");
import { useRef } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Modalize } from "react-native-modalize";

export const useBottomSheet = () => {
  console.log("AQUI");
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  // return (
  //   <>
  //     <TouchableOpacity onPress={onOpen}>
  //       <Text>Open the modal</Text>
  //     </TouchableOpacity>

  //     <Modalize ref={modalizeRef}>...your content</Modalize>
  //   </>
  // );
  return onOpen;
};
