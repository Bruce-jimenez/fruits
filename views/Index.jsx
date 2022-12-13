const React = require('react');
const DefaultLayout = require('./Default');



class Index extends React.Component {
    render() {
      return (
        <DefaultLayout title={"Fruits Index Page"}>
          <h1>Fruits index page</h1>
          <ul>
            {this.props.fruits.map((fruit, i) => {
              return (
                <li>
                  The <a href={`/fruits/${fruit.id}`}> {fruit.name} </a> is{" "}
                  {fruit.color}
                  <br />
                 
                  {fruit.readyToEat ? `It is ready to eat`: `It is not ready to eat`}
                  <br />
                  <a href={`/fruits/${fruit._id}/edit`}>Editing</a>
                  <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="DELETE"/>
                  </form>
                
                </li>
              );
            })}
          </ul>
  
          <nav>
            <a href='/fruits/new'>Create a New Fruit</a>
          </nav>
          </DefaultLayout>
      );
    }
  }
  
  module.exports = Index;