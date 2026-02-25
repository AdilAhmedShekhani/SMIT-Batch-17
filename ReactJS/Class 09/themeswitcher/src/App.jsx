import "./App.css";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme btn */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* Card */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
