const mongoose = require('mongoose');

// const alamatSchema = new mongoose.Schema({
//   jalan: String,
//   kota: String,
// }, { _id: false });

const DonaturSchema = new mongoose.Schema({
  noDonasi: { type: String, required: [true, 'kode donasi wajib diisi'], unique: true, trim: true},
  NamaDonatur: { type: String, required: [true, 'Nama wajib diisi'], trim: true },
  nominal: { type: Number, trim: true, },
  jenis: { type: String, required: [true, 'Jenis Donasi Wajib Diisi'],trim: [true, 'uang,barang,jasa'], },
  kontak: { type: String,  },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donatur', DonaturSchema);