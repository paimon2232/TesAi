import { SubmitKey } from "../store/app";
import type { LocaleType } from "./index";

const en: LocaleType = {
  WIP: "Dalam pengembangan..",
  Error: {
    Unauthorized:
      "Tolong masukkan kode yang sudah diberikan oleh admin Robert Media 378 🤖",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} percakapan`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} percakapan dengan ChatGPT Robert Media`,
    Actions: {
      ChatList: "Buka Daftar Obrolan",
      CompressedHistory: "Prompt Memori Riwayat Terkompresi",
      Export: "Ekspor Semua Pesan sebagai Markdown",
      Copy: "Menyalin",
      Stop: "Berhenti",
      Retry: "Mencoba kembali",
    },
    Rename: "Ganti nama Obrolan",
    Typing: "Mengetik…",
    Input: (submitKey: string) => {
      var inputHints = ``;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "";
      }
      return inputHints + "";
    },
    Send: "Kirim",
  },
  Export: {
    Title: "Semua Pesan",
    Copy: "Salin Semua",
    Download: "Unduh",
    MessageFromYou: "Pesan Dari Anda",
    MessageFromChatGPT: "Pesan Dari ChatGPT",
  },
  Memory: {
    Title: "Permintaan Memori",
    EmptyContent: "Belum ada apa-apa.",
    Send: "Kirim Memori",
    Copy: "Salin Memori",
    Reset: "Setel Ulang Sesi",
    ResetConfirm:
      "Menyetel ulang akan menghapus riwayat percakapan dan memori historis saat ini. Anda yakin ingin menyetel ulang?",
  },
  Home: {
    NewChat: "Obrolan Baru",
    DeleteChat: "Konfirmasi untuk menghapus percakapan yang dipilih?",
    DeleteToast: "Obrolan Dihapus",
    Revert: "Kembali",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua Pengaturan",
    Actions: {
      ClearAll: "Hapus Semua Data",
      ResetAll: "Atur Ulang Semua Pengaturan",
      Close: "Menutup",
      ConfirmResetAll: {
        Confirm: "Apakah Anda yakin ingin mengatur ulang semua konfigurasi?",
      },
      ConfirmClearAll: {
        Confirm: "Yakin ingin menyetel ulang semua obrolan?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
      },
    },
    Avatar: "Pilih Avatar",
    FontSize: {
      Title: "Ukuran huruf",
      SubTitle: "Sesuaikan ukuran font konten obrolan",
    },
    Update: {
      Version: (x: string) => `Versi: 3.7.8`,
      IsLatest: "Versi terbaru",
      CheckUpdate: "Cek pembaruan",
      IsChecking: "Memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Ditemukan versi baru: 3.7.8`,
      GoToUpdate: "Minta",
    },
    SendKey: "Kirim Kunci",
    Theme: "Tema",
    TightBorder: "Perbatasan Ketat",
    SendPreviewBubble: "Kirim Gelembung Pratinjau",
    Prompt: {
      Disable: {
        Title: "Nonaktifkan pelengkapan otomatis",
        SubTitle: "Masukkan / untuk memicu penyelesaian otomatis",
      },
      List: "Daftar Permintaan",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Edit",
    },
    HistoryCount: {
      Title: "Jumlah Pesan Terlampir",
      SubTitle: "Jumlah pesan terkirim yang dilampirkan per permintaan",
    },
    CompressThreshold: {
      Title: "Ambang Batas Kompresi Histori",
      SubTitle:
        "Akan dikompresi jika panjang pesan yang tidak dikompresi melebihi nilainya",
    },
    Token: {
      Title: "Kunci API",
      SubTitle: "Gunakan kunci API Anda untuk mengabaikan batas Kode Akses",
      Placeholder: "Custom API",
    },
    Usage: {
      Title: "Saldo Rekening",
      SubTitle(used: any, total: any) {
        return `Digunakan bulan ini $${used}, berlangganan $${total}`;
      },
      IsChecking: "Memeriksa...",
      Check: "Periksa lagi",
      NoAccess: "Masukkan Kunci API Anda untuk memeriksa saldo",
    },
    AccessCode: {
      Title: "Kode akses",
      SubTitle: "Kontrol akses diaktifkan untuk menggunakan Layanan",
      Placeholder: "Masukkan Kode Disini",
    },
    Model: "Pilih Model",
    Temperature: {
      Title: "Pengguna Ahli",
      SubTitle: "Nilai yang lebih besar membuat output lebih acak dan tidak stabil",
    },
    MaxTokens: {
      Title: "Token Maksimal",
      SubTitle: "Panjang maksimum token input dan token yang dihasilkan",
    },
    PresencePenlty: {
      Title: "Penalti Kehadiran",
      SubTitle:
        "Nilai yang lebih besar meningkatkan kemungkinan untuk membicarakan topik baru",
    },
  },
  Store: {
    DefaultTopic: "Percakapan Baru",
    BotHello: "Halo! Dengan siapa saya berinteraksi?",
    Error: "Ada yang tidak beres, coba lagi nanti.",
    Prompt: {
      History: (content: string) =>
        "Ini ringkasan riwayat obrolan antara AI dan pengguna sebagai rekap: " +
        content,
      Topic:
        "Harap buat judul empat hingga lima kata yang meringkas percakapan kita tanpa pendahuluan, tanda baca, tanda kutip, titik, simbol, atau teks tambahan. Hapus tanda kutip yang terlampir.",
      Summarize:
        "Ringkas diskusi kita secara singkat dalam 200 kata atau kurang untuk digunakan sebagai petunjuk untuk konteks masa depan.",
    },
    ConfirmClearAll: "Konfirmasi untuk menghapus semua obrolan dan data pengaturan?",
  },
  Copy: {
    Success: "Disalin ke papan klip",
    Failed: "Penyalinan gagal, berikan izin untuk mengakses papan klip",
  },
  Context: {
    Toast: (x: any) => `Dengan ${x} petunjuk kontekstual`,
    Edit: "Anjuran Kontekstual dan Memori",
    Add: "Tambahkan",
  },
};

export default en;
