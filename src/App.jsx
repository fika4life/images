import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Gallery from './Gallery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';

const queryClient = new QueryClient();
const App = () => {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </main>
  );
};
export default App;
