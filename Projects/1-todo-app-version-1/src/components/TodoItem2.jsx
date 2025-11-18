function TodoItem2() {

  let todoName = 'Go to College';
  let todoDate = '1/11/2025';

  return(
    <div className="row kg-row">
        <div className="col-6">
          {todoName}
        </div>

        <div className="col-4">
          {todoDate}
        </div>

        <div className="col-2">
          <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
  )
}

export default TodoItem2;