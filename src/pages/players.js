function Players() {

    const players  = [{'session':'sesion1',
                'date':'26 jul'}]
    return (
  
      <div class="container mt-5 card">
        <h2 class="mt-4">Players</h2>
        <div className="table-responsive mt-3 match-tb">
        { players.map((data,index)=>
        
        (<div class="col d-flex flex-column align-items-center">
                      <p class="session-text">{data.session}</p>
                      <div class="calendar">
                          <a href="/indivstats" class="align-items-center justify-content-center">
                              <img class="center" src="../src/public/logo192.png" alt="Kiwi standing on oval" />
                              <p class="month-text">{data.date}</p>
                          </a>
                      </div>
                  </div>)) }
  
          </div>
      </div>
    );
  }
  

export default Players;