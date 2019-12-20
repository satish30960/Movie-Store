import React from "react";
import ModalView from "./ModalComponent";
import ModalPop from "./Modalpopup";
//import { ButtonToolbar } from "react-bootstrap";
class CardComponent extends React.Component {
  state = {
    edit: false,
    del:false,
  };
  delHandler = (e) => {
    const {del} =this.state;
    this.setState({del:!del});
    //this.props.removeMovie(id);
    
  };

  toggleModal = (e) => {
    const {edit}=this.state;
    this.setState({
       edit: !edit
    });
  }
  render() {
    const {
      id,
      original_title,
      release_date,
      vote_average,
      vote_count,
      popularity,
      original_language,
      editMovieData,
      removeMovie,
      } = this.props;
    const { edit,del} = this.state;
    return (
      <React.Fragment>
        

        <div className="cards text-center" key={id}>
          <div>
            <p>Title: {original_title}</p>
            <br />
            <h6>
              Language: <strong>{original_language}</strong>
            </h6>
            <br />
            <h6>
              Popularity: <strong>{popularity}</strong>
            </h6>
            <br />
            <h6>
              Voters count: <strong>{vote_count}</strong>
            </h6>
            <br />
            <h6>
              Voting Average rating: <strong>{vote_average}</strong>
            </h6>
            <br />
            <h6>
              Release Date: <strong>{release_date}</strong>
            </h6>
            <br />
            <hr />
            
              <button
              type="button"
              value="Edit"
              className="btn btn-primary"
              onClick={this.toggleModal}
            >Edit
            </button>
             
            <ModalView
            modalIsOpen={edit}
            closeModal={this.toggleModal}
            closeFormAfterAdding={this.toggleModal}
            editMovie={editMovieData}
            edit={edit}
            id={id}
            original_title={original_title}
            release_date={release_date}
            vote_average={vote_average}
            vote_count={vote_count}
            popularity={popularity}
            original_language={original_language}
            />
   
            &nbsp;&nbsp;&nbsp;
            <button
              value="Delete"
              className="btn btn-danger"
              onClick={e => this.delHandler(e)}
            >
              Delete
              </button>
              <ModalPop 
              modalIsOpen={del}
              closeModal={this.delHandler}
              id={id}
              removeMovie={removeMovie}
              />

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CardComponent;
