import Comments from "./comments/Comments";

const App = () => {
  return (
    <div className="App">
      
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;