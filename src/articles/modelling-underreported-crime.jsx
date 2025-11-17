export default function ModellingUnderreportedCrimeArticle() {
  return (
    <div className="article-content">
        <p>
        Official crime measurements are often obscured by underreporting biases. This happens for many reasons: unequal reporting across different neighborhoods, victims feeling that reporting is "not worth it", or fear of reprisal. This "dark figure" leads to the misallocation of police resources and ineffective security planning.
        </p>

        <p>
        In this paper, we propose a modification of well-known combinatorial Multi-Armed Bandit (CMAB) algorithms (UCB1, LLR, and CUCB) to estimate the true distribution of crime and validated our approach using real-world data from Bogotá, Colombia.
        </p>

        <p>
        Intuitively, imagine our approach as a police planner with a limited budget. They have to decide which city quadrants to patrol every day. The planner has to decide between sending resources to areas known to have high crime or sending resources to "unknown" areas to see if crimes are happening there. To navigate this trade-off, the planner takes official police reports (which are accurate but limited) and combines them with "partial" observations—like citizen calls to emergency lines (which are plentiful but noisy).
        </p>

        <p>
        The following figure shows monthly aggregate violent crimes. The red line (SIEDCO) represents official statistics. The blue line (NUSE) represents crimes reported to the emergency call center. The green line (Total) is our estimate of the "true" crime, constructed by combining both sources.
        </p>

        <figure>
            <img src="/blogs/modelling-underreported-crime/unique_crimes_by_source_of_information.png" alt="Line graph showing monthly aggregate violent crimes compared by source: SIEDCO, NUSE, and Total estimate" />
            <figcaption>Figure 1: Comparison of official statistics (SIEDCO), emergency calls (NUSE), and total estimated crime.</figcaption>
        </figure>

        <p>
        This discrepancy is what our algorithm aims to discover. The next two images demonstrate how our proposed algorithm "learns" this aggregate number. It is important to note that the algorithm visits at most 10% of the city's area in each period. Despite this limitation, it attempts to reconstruct the full picture of incidence and underreporting. The graphs below show the convergence of our estimates (colored lines) toward the "True" crime rates (dotted lines).
        </p>

        {/* <figure>
            <img src="/blogs/modelling-underreported-crime/convergencia_global_reporteNxrho_mensual.png" alt="Graph showing the convergence of the estimated total number of crimes" />
            <figcaption>Figure 2: Convergence of the estimated total number of crimes to the observed number of crimes in the city.</figcaption>
        </figure> */}

        <figure>
            <img src="/blogs/modelling-underreported-crime/convergencia_global_subreporteNxqxrho_mensual.png" alt="Graph showing the convergence of the estimated number of underreported crimes" />
            <figcaption>Figure 2: Convergence of the estimated total number of underreported crimes implied by the model.</figcaption>
        </figure>

        <p>
        While the algorithm approximates the total number of crimes well, we also analyzed how accurate it is at the local level. The histogram below explores the nature of this convergence. It shows the error rates for specific cells (1 km² regions) across the city. We measured the distance between our estimate of the underreporting rate and the true rate after 350 iterations. As you can see, using the CUCB algorithm (green bars), almost all cells have an error of less than 0.2.
        </p>

        <figure>
            <img src="/blogs/modelling-underreported-crime/convergencia_global_q_ultimo_periodo2.png" alt="Histogram of convergence error of underreporting rate" />
            <figcaption>Figure 3: Histogram showing the error of the estimated underreporting rate across city cells.</figcaption>
        </figure>

        <h2>Mapping the Dark Figure</h2>

        <p>
        Finally, to visualize what this looks like geographically, the next figure illustrates the convergence using the CUCB algorithm. The left column displays the estimated crime incidence rates, while the right column shows the estimated underreporting rates. The rows demonstrate the progression from 25 iterations to 100 iterations. Comparing these heatmaps to the "Real" values in the top row, you can see how the algorithm progressively "fills in the blanks," identifying hot spots of crime and underreporting that might otherwise remain hidden.
        </p>

        <figure>
            <img src="/blogs/modelling-underreported-crime/CUCB-crime-estimates.png" alt="Heatmaps showing the convergence of crime and underreporting estimates over time" />
            <figcaption>Figure 4: Heat map illustrating the convergence of estimated crime (left) and underreporting (right) compared to real values.</figcaption>
        </figure>
    </div>
  )
}