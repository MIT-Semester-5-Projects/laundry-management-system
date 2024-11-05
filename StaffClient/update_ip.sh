#!/bin/bash

# Path to the .env file
ENV_FILE=".env"

# Key for IP address in .env
IP_KEY="REACT_NATIVE_PACKAGER_HOSTNAME"

# Get the host machine IP address
HOST_IP=$(ifconfig wlan0 | grep 'inet ' | awk '{print $2}')

# Update or add the IP address in the .env file
if grep -q "^${IP_KEY}=" "$ENV_FILE"; then
    # If the IP key already exists, replace it
    sed -i "s/^${IP_KEY}=.*/${IP_KEY}=${HOST_IP}/" "$ENV_FILE"
else
    # If the IP key does not exist, add it
    echo "${IP_KEY}=${HOST_IP}" >> "$ENV_FILE"
fi

source "$ENV_FILE"

echo "Updated .env with ${IP_KEY}=${HOST_IP}"
