//* 37. What is a pure function, and why is it useful in UI rendering?

/* 
* Ans) A function is called pure function, which will return same output for same input always, there is not side effects occurred, no share states present here.
* It is useful in UI rendering becuase of predictability we know that what output is going to be print, because for same input it will give same output as alaways.

* Pure functions are highly beneficial in UI rendering, particularly in frameworks like React, due to several key advantages: 

• Predictability and Determinism: Pure functions always produce the same output for the same input, without any side effects. In UI rendering, this means that given the same props and state, a pure component will always render the exact same UI. This predictability makes debugging and understanding UI behavior significantly easier. 

• Easier Testing: Since pure functions don't rely on external state or cause side effects, they are isolated and self-contained. This makes them much simpler to test, as you only need to provide inputs and assert the expected output, without needing to mock or manage complex environments. 

• Improved Performance through Memoization: The deterministic nature of pure functions allows for memoization. UI frameworks can optimize rendering by re-rendering a component only when its props or state have actually changed, avoiding unnecessary re-renders of unchanged components or sub-trees. This leads to significant performance improvements, especially in complex UIs. 

• Enhanced Readability and Maintainability: Pure functions are easier to reason about because their behavior is entirely determined by their inputs. This leads to more readable and maintainable code, as developers can quickly understand what a component will render without having to track down external dependencies or potential side effects. 

• Facilitates Concurrent Rendering: In environments like React's Concurrent Mode, the ability to interrupt and resume rendering is crucial. Pure functions, with their lack of side effects, enable this, as they can be safely paused and restarted without causing inconsistencies in the UI. 

AI responses may include mistakes.
*/

