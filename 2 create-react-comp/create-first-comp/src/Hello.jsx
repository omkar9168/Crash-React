function Hello(){

  let myNAme = "Omkar";
  let number = 456;
  let fullName = () => {
    return 'Omkar Ghadge';
  }

  return(
    <p>
      MessageNo: {number}, I am your master {fullName()} <br />
      {myNAme}
    </p>
  )
}

export default Hello;