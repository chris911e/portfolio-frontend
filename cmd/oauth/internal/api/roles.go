package api

import(
	"net/http"
	"encoding/json"
)

func (h *Handler) ListRoles(w http.ResponseWriter, r *http.Request) {
	roles, err := h.Queries.ListRoles(h.Context)
	if err != nil {
		http.Error(w, "Could not fetch roles", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	
	err = json.NewEncoder(w).Encode(roles)
	if err != nil {
		http.Error(w, "Could not encode roles", http.StatusInternalServerError)
		return
	}
}
