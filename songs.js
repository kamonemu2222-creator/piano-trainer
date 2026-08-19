/* ============================================================
   楽譜トレーナー ─ 曲データ
   ============================================================
   曲を足す・消す・並べ替えるときは、このファイルだけを編集します。
   下の SONGS に1行足すだけで、アプリの曲リストに出てきます。

   ─ 音符の書き方 ─────────────────────────────
     C D E F G A B   … ドレミファソラシ（4分音符）
     C4              … 中央のド。数字はオクターブ
                       数字を書くと、そこから先はずっとそのオクターブが続く。
                       つまり「オクターブをまたぐところだけ数字を書く」。
                       最初に何も書かなければオクターブ4から始まる。
     C-              … 2分音符（- を足すごとに1拍長くなる。C-- で全音符）
     C.              … 付点4分音符（1.5拍）
     C_              … 8分音符（0.5拍）
     |               … 小節線。読みやすさのためだけで、無くてもよい
     改行・空白       … いくつ入れてもよい

   ─ 例 ─────────────────────────────────
     "C C G G | A A G-"        → ド ド ソ ソ ラ ラ ソ(2拍)  すべてオクターブ4
     "G4 A4 C5 | B4 A4"        → ソ4 ラ4 ド5 シ4 ラ4
     "C5 D E | F"              → ド5 レ5 ミ5 ファ5（数字はその後も効き続ける）

   ─ 注意 ────────────────────────────────
     ・♯♭は未対応なので、白鍵だけで書ける調（ハ長調／イ短調）にしてください
     ・著作権が切れている曲を使ってください
     ・音域が広すぎると五線からはみ出します（だいたい2オクターブ半まで）
     ・level は難しさの目安（1〜3）。曲名の後ろに★の数で表示されます。省略すると1
   ============================================================ */

const SONGS = [

  /* ── やさしい（ドからソの範囲・跳躍が少ない） ───────────── */

  { name:"きらきら星", level:1,
    notes:`C C G G | A A G-  | F F E E | D D C-
           G G F F | E E D-  | G G F F | E E D-
           C C G G | A A G-  | F F E E | D D C-` },

  { name:"メリーさんのひつじ", level:1,
    notes:`E D C D | E E E-  | D D D-  | E G G-
           E D C D | E E E E | D D E D | C--` },

  { name:"ちょうちょう", level:1,
    notes:`G E E- | F D D- | C D E F | G G G-
           G E E- | F D D- | C E G G | E C-` },

  { name:"ロンドン橋", level:1,
    notes:`G A G F | E F G- | D E F- | E F G-
           G A G F | E F G- | D- G-  | E C-` },

  { name:"かえるの合唱", level:1,
    notes:`C D E F | E D C-  | E F G A | G F E-
           C- C-   | C- C-   | C_ C_ D_ D_ E_ E_ F_ F_ | E D C-` },

  /* ── ふつう（1オクターブ以上・下の加線が出る） ───────────── */

  { name:"歓びの歌（全曲）", level:2,
    notes:`E E F G | G F E D | C C D E | E. D_ D-
           E E F G | G F E D | C C D E | D. C_ C-
           D D E C | D E. F_ E C | D E. F_ E D | C D G3-
           E4 E F G | G F E D | C C D E | D. C_ C--` },

  { name:"ハッピーバースデー", level:2,
    notes:`G4_ G4_ | A4 G4 C5 | B4--
           G4_ G4_ | A4 G4 D5 | C5--
           G4_ G4_ | G5 E5 C5 | B4 A4-
           F5_ F5_ | E5 C5 D5 | C5--` },

  { name:"きよしこの夜", level:2,
    notes:`G4 A4 G4 | E4-- | G4 A4 G4 | E4--
           D5-- | D5 B4- | C5-- | C5 G4-
           A4-- | A4 C5 B4 | A4 G4 A4 | G4 E4-
           A4-- | A4 C5 B4 | A4 G4 A4 | G4 E4-
           D5 D5 F5 | D5 B4- | C5-- | E5 C5 G4
           E4 G4 F4 | D4 C4--` },

  /* ── むずかしい（2オクターブ・跳躍が多い・加線が上下に出る） ── */

  { name:"アメイジング・グレイス", level:3,
    notes:`G4 | C5 E5 C5 | E5 D5- | C5 A4 G4 | G4--
           G4 | C5 E5 C5 | E5 D5- | E5---
           G5 | G5 E5 C5 | E5 D5- | C5 A4 G4 | G4--
           G4 | C5 E5 C5 | E5 D5- | C5---` },

  { name:"読譜ドリル：加線（C4〜C6）", level:3,
    notes:`C4 E4 G4 C5 | E5 G5 C6-  | B5 G5 E5 C5 | A4 F4 D4 C4-
           C4 D4 E4 F4 | G4 A4 B4 C5 | D5 E5 F5 G5 | A5 B5 C6--
           C6 A5 F5 D5 | B4 G4 E4 C4 | C4 G4 E5 C6 | C4--` },

  { name:"読譜ドリル：跳躍", level:3,
    notes:`C4 E4 C4 F4 | C4 G4 C4 A4 | C4 B4 C4 C5 | C5 A4 C5 F4
           C5 D4 C5 B4 | A4 F5 G4 E5 | F4 D5 E4 C5 | D4 B4 C4--
           G3 E4 A3 F4 | B3 G4 C4 A4 | D4 B4 E4 C5 | C4--` },

];

/* アプリ側から読めるようにする（このファイルの書き換えだけで曲を差し替えられる） */
if(typeof window!=="undefined") window.SONGS=SONGS;
if(typeof module!=="undefined") module.exports=SONGS;
