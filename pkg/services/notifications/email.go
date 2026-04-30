package notifications

import (
	"os"

	"github.com/grafana/grafana/pkg/services/user"
	"github.com/grafana/grafana/pkg/setting"
)

// AttachedFile struct represents email attached files.
type AttachedFile struct {
	Name    string
	Content []byte
}

// EmbeddedContent struct represents an embedded file.
type EmbeddedContent struct {
	Name    string
	Content []byte
}

// Message is representation of the email message.
type Message struct {
	To               []string
	SingleEmail      bool
	From             string
	Subject          string
	Body             map[string]string
	Info             string
	ReplyTo          []string
	EmbeddedFiles    []string
	EmbeddedContents []EmbeddedContent
	AttachedFiles    []*AttachedFile
}

func envOrDefault(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func setDefaultTemplateData(cfg *setting.Cfg, data map[string]any, u *user.User) {
	data["AppUrl"] = cfg.AppURL
	data["BuildVersion"] = setting.BuildVersion
	data["BuildStamp"] = setting.BuildStamp
	data["EmailCodeValidHours"] = cfg.EmailCodeValidMinutes / 60
	data["Subject"] = map[string]any{}
	if u != nil {
		data["Name"] = u.NameOrFallback()
	}
	data["BrandColor"] = envOrDefault("GF_BRANDING_COLOR", "#FF6600")
	data["BrandLogoUrl"] = envOrDefault("GF_BRANDING_LOGO_URL", "https://grafana.com/static/assets/img/logo_new_transparent_light_400x100.png")
	data["BrandFooter"] = envOrDefault("GF_BRANDING_FOOTER", "Grafana Labs")
	data["BrandFooterNotice"] = envOrDefault("GF_BRANDING_FOOTER_NOTICE", "")
	dataCopy := map[string]any{}
	for k, v := range data {
		dataCopy[k] = v
	}
	data["TemplateData"] = dataCopy
}
