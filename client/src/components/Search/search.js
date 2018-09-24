import React from "react"

import "./search.css"

const Search = (props) => (

<React.Fragment> 

    <div class="container">
    
    <div class="card">
        <div className="card-header">
    <   strong><i class="fa fa-list-alt"></i> Search Parameters</strong>
        </div>    

         <div className="card-body">
            <form>
        
                <div className="form-group">
                    <label for="search">Topic</label>
                    <input className="form-control" {...props} />
                </div>
                    
                <div class="form-group">
                    <label for="start-year">Start Year</label>
                    <input className="form-control" {...props} />
                </div>

                <div class="form-group">
                    <label for="end-year">End Year</label>
                    <input className="form-control" {...props} />
                </div>

                <button type="submit" class="btn btn-default" id="run-search">
                <i class="fa fa-search"></i> Search</button>
        
            </form>
        </div>
    </div>
    
    </div>

</React.Fragment>      

);

export default Search;