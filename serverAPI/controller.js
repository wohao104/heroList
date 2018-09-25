
const conn = require('./db.js')

module.exports = {
  getAllHero: (req, res) => {
    const sql = 'select * from heros';
    conn.query(sql,(err, data) => {
      if(err) return res.send({status: 500,msg: err.message,data: null});
      res.send({status: 200,msg: 'ok',data: data})
    })
  },
  addHero: (req, res) => {
    const hero = req.body;
    const dt = new Date()
    const y = dt.getFullYear().toString().padStart(2, '0');
    const m = (dt.getMonth() + 1).toString().padStart(2, '0');
    const d = dt.getDate().toString().padStart(2, '0');
    const hh = dt.getHours().toString().padStart(2, '0');
    const mm = dt.getMinutes().toString().padStart(2, '0');
    const ss = dt.getSeconds().toString().padStart(2, '0');
    hero.ctime = `${y}-${m}-${d} ${hh}-${mm}-${ss}`;
    const sql = 'insert into heros set ?'
    conn.query(sql, hero, (err, data) => {
      if(err) return res.send({status: 500,msg: err.message,data: null})
      res.send({status: 200,msg: 'ok',data: null})
    })
  },
  getHero: (req, res) => {
    const id = req.params.id;
    const sql = 'select * from heros where id = ?';
    conn.query(sql, id, (err, data) => {
      if(err) return res.send({status: 500, msg: err.message, data: null});
      res.send({status: 200, msg: 'ok', data: data});
    })
  },
  updateHero: (req, res) => {
    const hero = req.body;
    const id = req.params.id;
    const sql = 'update heros set ? where id = ?';
    conn.query(sql, [hero, id], (err, date) => {
      if(err) return res.send({status: 500, msg: err.message, data: null});
      res.send({status: 200, msg: 'ok', data: null})
    })
  },
  deleteHero: (req, res) => {
    const id = req.params.id;
    const sql = 'update heros set isdel = 1 where id = ?';
    conn.query(sql, id, (err, data) => {
      if(err) return res.send({status: 500, msg: err.message, data: null});
      res.send({status: 200, msg: 'ok', data: null})
    })
  }
}