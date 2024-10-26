// src/App.jsx
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a test card to verify our components are working.</p>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;