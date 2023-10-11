import axios from 'axios';

const apiKey = '6756d200066bc2341af3eee09cbaf633';

const voiceSettings = {
    stability: 0.5,
    similarity_boost: 0.5
};

const voiceId = '21m00Tcm4TlvDq8ikWAM';

export const getVoice = async () => {
    try {
        const baseUrl = 'https://api.elevenlabs.io/v1/voices';
        const headers = {
            'Content-Type': 'application/json',
            'xi-api-key': apiKey
        };

        const response = await axios.get(`${baseUrl}`, {
            headers
        });

        if (response.status === 200) {
            console.log(response.data);
        }
    } catch (error) {}
};

export const textToSpeak = async (text: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            const baseUrl = 'https://api.elevenlabs.io/v1/text-to-speech';
            const headers = {
                'Content-Type': 'application/json',
                'xi-api-key': apiKey
            };

            const requestBody = {
                text,
                voice_settings: voiceSettings,
                model_id: 'eleven_monolingual_v1'
            };

            const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
                headers,
                responseType: 'blob'
            });

            if (response.status === 200) {
                resolve(URL.createObjectURL(response.data));
            } else {
                reject();
            }
        } catch (error) {
            reject();
        }
    });
};
