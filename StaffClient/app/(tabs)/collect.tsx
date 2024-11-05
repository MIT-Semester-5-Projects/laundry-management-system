import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

async function sendId(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending ID:", error);
  }
}

export default function CollectScreen() {
  const [enableScanner, setEnableScanner] = useState(false);
  const [id, setId] = useState("0");

  // Get camera permission once on component mount
  const [permission, requestPermission] = useCameraPermissions();

  // Handle barcode scanning
  const handleBarcodeScanned = ({ data }) => {
    if (enableScanner && data.length === 32) {
      setEnableScanner(false); // Disable the scanner after a successful scan
      setId(data); // Store scanned ID
    }
  };

  // Effect to send ID to backend once scanned
  useEffect(() => {
    if (id !== "0") {
      sendId("http://110.29.92.56:3504/laundry/status/collected", {
        laundry_id: id,
      });
    }
  }, [id]);

  // Check and request camera permission
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={handleBarcodeScanned}
      />

      <Button
        color="#8db7e3"
        title="Scan"
        onPress={() => setEnableScanner(true)}
      />
      <Text style={styles.idText}>Scanned ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 20,
  },
  idText: {
    fontSize: 18,
    marginTop: 10,
    color: "black",
  },
});
