import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";

const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_URL;
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

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      const textResponse = await response.text();
      console.log("Non-JSON response:", textResponse);
      return textResponse;
    }
  } catch (error) {
    console.error("Error sending ID:", error);
  }
}

export default function WashScreen() {
  const [enableScanner, setEnableScanner] = useState(false);
  const [id, setId] = useState("0");
  const [permission, requestPermission] = useCameraPermissions();

  const handleBarcodeScanned = ({ data }) => {
    if (enableScanner && data.length === 32) {
      setEnableScanner(false);
      setId(data);
      setTimeout(() => setEnableScanner(true), 2000);
    }
  };

  useEffect(() => {
    if (id !== "0") {
      const response = {
        laundry_id: id,
        timestamp: new Date().toISOString(),
      };
      sendId(`${SERVER_URL}/laundry/status/washing`, response);

      console.log(`${SERVER_URL}/laundry/status/washing`);
      console.log(response);
    }
  }, [id]);

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
        title="Wash"
        onPress={() => setEnableScanner((prev) => !prev)}
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
