const Home = () => {

    const handleAdd = () => {
         // downloads only when the button is clicked
        import("../utils/getSum.js").then(
            module => alert(module.getSum(2,2))
        )
    }

  return (
    <>
      <h1 className="text-2xl font-bold">HOME</h1>
      <p className="text-lg">Hi this is the home page.</p>

      <button
        type="button"
        className="px-3 py-2 mt-4 rounded-md bg-slate-300 hover:bg-slate-400"
        onClick={handleAdd}
      >
        ADD 2+2
      </button>
    </>
  );
};

export default Home;
