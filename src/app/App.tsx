import AppRouter from './providers/router/ui/app-router.tsx';
import './styles/index.scss';

const App = () => {
  return (
    <div
      id="app"
      className="app"
    >
      <AppRouter />
    </div>
  );
};

export default App;
