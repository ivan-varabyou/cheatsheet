createPortal(children, domNode, key ?)

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

// позволяет программно измерить производительность рендеринга дерева React.
<Profiler id="App" onRender={onRender}><App /></Profiler>

//позволяет кэшировать результат выборки данных или вычислений.
const cachedFn = cache(fn);

const SomeContext = createContext(defaultValue)
< ThemeContext.Provider value = { theme } > <Page /></ThemeContext.Provider>
const theme = useContext(ThemeContext);

const SomeComponent = forwardRef(render)
forwardRef(render)  // чтобы ваш компонент получил ссылку и перенаправил ее дочернему компоненту:
const MyInput = forwardRef(function MyInput(props, ref) { });
// forwardRefпринимает функцию рендеринга в качестве аргумента
// props: реквизиты, передаваемые родительским компонентом.
// ref: refатрибут, передаваемый родительским компонентом.


const MarkdownPreview = lazy(() => import('./MarkdownPreview.js')); // => Promise.then()
<Suspense fallback={<Loading />}><MarkdownPreview /></Suspense>


// Указание пользовательской функции сравнения
const Chart = memo(function Chart({ dataPoints }) {}, arePropsEqual);
function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.dataPoints.length === newProps.dataPoints.length &&
    oldProps.dataPoints.every((oldPoint, index) => {
      const newPoint = newProps.dataPoints[index];
      return oldPoint.x === newPoint.x && oldPoint.y === newPoint.y;
    })
  );
}


// Функция startTransitionпозволяет пометить обновление состояния как переход. startTransition(scope)
function selectTab(nextTab) { startTransition(() => { setTab(nextTab); });
const [isPending, startTransition] = useTransition() //позволяет обновлять состояние, //! не блокируя пользовательский интерфейс.


//Вы также можете обновить состояние родительского компонента с помощью useTransition
    return (<button onClick={() => { startTransition(() => { onClick(); }); }}> {children} </button>

// Встроенные компоненты
<Fragment> // альтернативно записываемый как <>...</>, позволяет группировать несколько узлов JSX вместе.
<Profiler> //позволяет программно измерить производительность рендеринга дерева React.
<Suspense> // позволяет отображать резервный вариант во время загрузки дочерних компонентов.
<StrictMode> //включает дополнительные проверки только для разработчиков, которые помогают вам находить ошибки на ранней стадии.
