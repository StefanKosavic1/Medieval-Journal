import { ComponentType } from 'react';
import { DEFAULT_HELLO_MESSAGE } from '../constants/appDefaults';

interface ComponentWithMessage {
  helloMessage?: string;
}

const withHelloMessage =
  <T,>(Component: ComponentType<ComponentWithMessage & T>) =>
  (props: ComponentWithMessage & T) => {
    const message = props.helloMessage ?? DEFAULT_HELLO_MESSAGE;

    console.log(`${message} ${Component.name}`);

    return <Component {...props} message={message} />;
  };

export default withHelloMessage;
