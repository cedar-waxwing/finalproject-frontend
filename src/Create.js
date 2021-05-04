import React, { useState } from 'react';
import axios from 'axios';

const Create = (props) => {

    return (
        <div className="row">
            <div className="col-4">
                <form>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            </div>
    );
}



export default Create;
