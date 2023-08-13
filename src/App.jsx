import Header from "./components/Header"


function App() {
  const user = "Jolene"

  return (
    <div className="bg-black-200 min-h-screen min-w-full">
      <main className="max-w-lg">
        <Header 
          user={user}
        />
      </main>

    </div>
  )
}

export default App
