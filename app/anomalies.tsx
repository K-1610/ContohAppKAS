
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { StatusBadge } from "../components/StatusBadge";
import { C } from "../constants/theme";

export default function Anomalies() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={s.page}>
      <AppHeader title="Deteksi anomali" />

      <Text style={s.title}>Perlu pemeriksaan</Text>

      <Text style={s.desc}>
        Contoh hasil simulasi untuk memperlihatkan ketidaksesuaian hitungan.
        Bukan sistem AI produksi.
      </Text>

      <View style={s.card}>
        <StatusBadge status="Perlu diperiksa" />

        <Text style={s.name}>Laporan perlengkapan jaringan</Text>
        <Text style={s.meta}>Harga satuan Rp10.000</Text>
        <Text style={s.meta}>Jumlah barang: 5</Text>

        <View style={s.divider} />

        <View style={s.line}>
          <Text style={s.label}>Total seharusnya</Text>
          <Text style={s.value}>Rp50.000</Text>
        </View>

        <View style={s.line}>
          <Text style={s.label}>Nilai pembanding</Text>
          <Text style={s.value}>Rp40.000</Text>
        </View>

        <View style={s.alert}>
          <Text style={s.alertTitle}>Selisih Rp10.000</Text>

          <Text style={s.alertText}>
            Total pembanding tidak sesuai dengan harga satuan dikali jumlah.
            Bendahara perlu memeriksa rincian dan nota.
          </Text>
        </View>
      </View>

      <Text style={s.section}>Cara membaca status</Text>

      <Text style={s.desc}>
        Penanda anomali adalah peringatan untuk ditinjau, bukan bukti
        penyalahgunaan dana. Transaksi final tidak diubah atau dihapus
        oleh tampilan ini.
      </Text>

      <AppButton
        title="Buka laporan pengeluaran"
        onPress={() => router.push("/expense")}
        variant="outline"
      />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: {
    padding: 20,
    gap: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: C.navy,
  },
  desc: {
    fontSize: 13,
    color: C.navy,
    lineHeight: 19,
  },
  card: {
    borderWidth: 1,
    borderColor: C.blue,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "800",
    color: C.navy,
  },
  meta: {
    fontSize: 13,
    color: C.navy,
  },
  divider: {
    height: 1,
    backgroundColor: C.blue + "55",
    marginVertical: 4,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  label: {
    fontSize: 13,
    color: C.navy,
  },
  value: {
    fontSize: 13,
    fontWeight: "800",
    color: C.navy,
  },
  alert: {
    backgroundColor: C.navy,
    borderRadius: 12,
    padding: 14,
    gap: 6,
    marginTop: 5,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: C.white,
  },
  alertText: {
    fontSize: 12,
    lineHeight: 18,
    color: C.white,
  },
  section: {
    fontSize: 17,
    fontWeight: "800",
    color: C.navy,
  },
});
