# OSS Week 12 — React Hooks Playground (Student Starter)

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?


## STEP 2. Source Code Exploration
1. Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할
    - App.jsx의 역할: 어떤 Lab을 보여줄지만 관리
    - Lab1: useEffect 타이머
    - Lab2: Start/Stop
    - Lab3: Input 포커스
    - Lab4: useRef 타이머
    
2. useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
    useEffect는 컴포넌트 바깥 일을 컴포넌트랑 맞춰주는 hook이다.
    - Effect: () => { ... } 형식이고 실행할 일을 적는다.
    - Cleanup: return () => { ... } 형식이고 정리할 일을 적는다.
        Dependency가 바뀌어서 Effect가 다시 실행되기 직전과 컴포넌트가 사라질때 실행
    - Dependency Array: [dependencies]형식이고 언제 다시 실행할지를 나타낸다.
        - []: 처음 화면에 나타날 때 딱 한 번
        - 배열 없음: 렌더링될 때마다 실행

3. useRef: .current 속성과 useState의 차이
    - useRef: 값을 넣어두는 상자
        const countRef = useRef(0); -> 0을 넣어둔 상자 만든다.
        countRef.current에 값 저장되어 있고 값이 변경되어도 리랜더링 발생하지 않는다.
        컴포넌트가 다시 랜더링 되어도 동일한 Ref객체를 유지한다.
    - useState와의 차이
        - useState는 값이 바뀔때마다 랜더링되었었는데 useRef는 랜더링되지않는다. 
        - useState는 상태변수로 접근했는데, useRef는 .current로 접근한다.
        - useState는 화면에 표시할 상태를 나타는 목적이고, useRef는 DOM 참조 및 내부에 저장할 용도이다.

4. Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명

```jsx



```

## Lab 비교 분석

- useEffect의 Dependency Array가 필요한 이유는? effect을 원할때마다 실행하기 위해서
- Cleanup을 사용하지 않으면 어떤 문제가 발생할 수 있는가? 타이머가 꺼지지 않아서 다시 돌아갔을 때 타이머가 계속 중복해서 쌓이게 된다. 
- useState와 useRef의 가장 중요한 차이는? 값이 바뀔 때 화면의 랜더링 되냐의 유무 차이가 가장 중요하다
- LAB 2와 LAB 4의 Timer 관리 방식은 어떻게 다른가? Lab2에서는 start버튼이 running으로 바꿔놓기만하고 React가 running인걸 보고 useEffect를 다시 실행해서 그 안에있는 setInterval이 타이머를 키는 것이고 Lab4는 start 함수 내에서 버튼이 직접 setInterval을 호출해서 중간에 useEffect를 거치지 않는다.
