package org.jordijaspers.aniflix.api.recommendation.model;

import jakarta.persistence.Transient;
import lombok.Data;
import org.jordijaspers.aniflix.api.anime.model.constant.WatchStatus;

import java.io.Serial;
import java.io.Serializable;

import static org.jordijaspers.aniflix.config.GlobalConfiguration.SERIAL_VERSION_UID;

@Data
public class Recommendation implements Serializable {

    @Serial
    private static final long serialVersionUID = SERIAL_VERSION_UID;

    private Integer anilistId;

    private Long malId;

    private String title;

    private String status;

    private long episodes;

    private String image;

    private String cover;

    private long rating;

    private String type;

    @Transient
    private boolean liked;

    @Transient
    private boolean inLibrary;

    @Transient
    private int lastSeenEpisode;

    @Transient
    private WatchStatus watchStatus = WatchStatus.NOT_STARTED;
}