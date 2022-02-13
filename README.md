https://www.youtube.com/watch?v=_YydVvnjNFE&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=3


StyleSheet emulates CSS - it essentially allows us to create a 'styles' object where we create CSS which React translates into something Andriod and iOS can understand. iOS/Andriod apps do not support CSS.

React Native vs CSS
- We use camelCase not Hyphens-when-creating our css properties
- When you have a Text component inside of a Text component, it will inherit the parent components style property.


React Context & Hooks
- Context is designed to share data that can be considered "global" for a tree of React components
- What should I use the context api for? Current authenticated user, theme, prefered language
- Seems to me this is a weird react implementation of sessions? i guess ill go with it