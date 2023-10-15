import axios from "axios";

const baseUrl = "http://localhost:8010";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

class ServerProvider {
  async checkBio(url) {
    try {
      const response = await api.post("", {
        linkedin_url: url,
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async genInitIdea(sum, interests) {
    try {
      const reponse = await api.post("", {
        linkedin_summary: sum,
        interests,
      });

      return reponse.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async dialog(log, input, speaker) {
    try {
      const response = await api.post("", {
        log,
        human_input: input,
        speaker_list: speaker,
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async conclusion(log) {
    try {
      const response = await api.post("", {
        log,
      });

      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default ServerProvider;
