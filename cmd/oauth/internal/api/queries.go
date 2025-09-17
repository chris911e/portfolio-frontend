package api

import(
	"context"
	"piffels/sqlc/oauthdb"
)

type Handler struct {
	Queries	*oauthdb.Queries
	Context	context.Context
}

func NewHandler(q *oauthdb.Queries, ctx context.Context) *Handler {
	return &Handler{
		Queries: q,
		Context: ctx,
	}
}
