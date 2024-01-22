package org.jordijaspers.aniflix.api.consumet.model.anilist;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import lombok.Data;

@Data
public class AnilistVoiceActor {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("language")
    private String language;

    @Valid
    @JsonProperty("name")
    private AnilistActorNames name;

    @JsonProperty("image")
    private String image;

}