import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  UnAuth: NavigatorScreenParams<UnAuthenticatedStackList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type UnAuthenticatedStackList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type UnAuthScreenProps<T extends keyof UnAuthenticatedStackList> =
  CompositeScreenProps<
    BottomTabScreenProps<UnAuthenticatedStackList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
