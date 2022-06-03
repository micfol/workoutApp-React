// import { useState, useEffect } from 'react';
// import { education } from '../api';
// import { EducationInfoCard } from '../components/education/EducationInfoCard';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const EducationHome = () => {
  // const [exerciseInfo, setExerciseInfo] = useState([]);

  // async function getExerciseInfo() {
  //   const response = await education();
  //   setExerciseInfo(response.data);
  // };

  // useEffect(() => {
  //   getExerciseInfo()
  // }, []);

  // const list = exerciseInfo.map((exercise) => {
  //     return <EducationInfoCard info={exercise} key={exercise._id}/>
  // });

  return (
    <>
      <>
        <Box mb={2} mt={2}>
          <Paper elevation={9}>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography variant="e2">
                  Exercise Name: Barbell Full Squat
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                maxheight="auto"
                image="https://res.cloudinary.com/dgsza9y0r/image/upload/v1652090751/StrongLiftr/0043_rgmptw.gif"
                alt="Visualization of the exercise motion."
              />
              <CardContent>
                <Typography variant="p1" color="text.primary">
                  <h3>Equipment Required: Barbell</h3>
                </Typography>
                <Typography variant="p1" color="text.primary" textAlign="left">
                  <p>
                    <strong>Instructions:</strong> 1. Safely load the barbell
                    onto your traps and shoulders. Stand with your feet
                    shoulder-width apart, toes slightly out, core braced, and
                    chest up. 2. Initiate a basic squat movement — hips back,
                    knees bent, ensuring they fall out, not in. Pause when your
                    thighs reach about parallel to the ground. 3. Push through
                    your entire foot to return to start.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Box>

        <Box mb={2} mt={2}>
          <Paper elevation={9}>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography variant="e2">
                  Exercise Name: Overhead Press
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                maxheight="auto"
                image="https://res.cloudinary.com/dgsza9y0r/image/upload/v1652090773/StrongLiftr/1457_nvhhfp.gif"
                alt="Visualization of the exercise motion."
              />
              <CardContent>
                <Typography variant="p1" color="text.primary">
                  <h3>Equipment Required: Barbell</h3>
                </Typography>
                <Typography variant="p1" color="text.primary" textAlign="left">
                  <p>
                    <strong>Instructions:</strong> For the standing barbell
                    press, walk up to the bar and grab it slightly wider than
                    shoulder-width apart with palms facing away from your body.
                    Then follow these steps: 1. Take the bar off the rack and
                    step back. The bar should be resting in your hands right
                    around your collarbone. 2. To start the movement, brace your
                    abs, squeeze your butt to engage your glutes, tilt your head
                    back, and drive the bar up toward the ceiling. 3. Once the
                    bar passes your forehead, return your head to neutral while
                    locking your arms out overhead. At the top of the press,
                    make sure your abs and glutes are still engaged and you’re
                    not bending your lower back. 4. Slowly lower the bar back
                    down to your shoulders, tilting your head back to make room.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Box>

        <Box mb={2} mt={2}>
          <Paper elevation={9}>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography variant="e2">Exercise Name: Bench Press</Typography>
              </CardContent>
              <CardMedia
                component="img"
                maxheight="auto"
                image="https://res.cloudinary.com/dgsza9y0r/image/upload/v1652090811/StrongLiftr/0025_wz9es8.gif"
                alt="Visualization of the exercise motion."
              />
              <CardContent>
                <Typography variant="p1" color="text.primary">
                  <h3>Equipment Required: Barbell, Flat Bench</h3>
                </Typography>
                <Typography variant="p1" color="text.primary" textAlign="left">
                  <p>
                    <strong>Instructions:</strong> 1. Lie on your back on a flat
                    bench. Grip a barbell with hands slightly wider than
                    shoulder width. The bar should be directly over the
                    shoulders. 2. Press your feet firmly into the ground and
                    keep your hips on the bench throughout the entire movement.
                    3. Keep your core engaged and maintain a neutral spine
                    position throughout the movement. Avoid arching your back.
                    4. Slowly lift the bar or dumbbells off the rack, if using.
                    Lower the bar to the chest, about nipple level, allowing
                    elbows to bend out to the side, about 45 degrees away from
                    the body. Stop lowering when your elbows are just below the
                    bench. Press feet into the floor as you push the bar back up
                    to return to starting position. 5. Perform 5 reps.{" "}
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Box>

        <Box mb={2} mt={2}>
          <Paper elevation={9}>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography variant="e2">Exercise Name: Barbell Row</Typography>
              </CardContent>
              <CardMedia
                component="img"
                maxheight="auto"
                image="https://res.cloudinary.com/dgsza9y0r/image/upload/v1652090828/StrongLiftr/0027_r2l3kx.gif"
                alt="Visualization of the exercise motion."
              />
              <CardContent>
                <Typography variant="p1" color="text.primary">
                  <h3>Equipment Required: Barbell</h3>
                </Typography>
                <Typography variant="p1" color="text.primary" textAlign="left">
                  <p>
                    <strong>Instructions:</strong> 1. Stand behind a barbell
                    with your feet shoulder-width apart. 2. Bend at the hips
                    while keeping the back straight and knees slightly bent.
                    Think of sitting back slightly (moving your tailbone behind
                    your feet) — this helps with positioning for lifting the
                    barbell. Your body should be bent forward at about a 45
                    degree angle, but no further. 3. Grasp the bar a little
                    wider than shoulder width, keeping your forearms pronated
                    (palms facing your shins). 4. Tighten your glutes and core
                    as you pull your elbows up behind you, bringing the bar to
                    your abs. Keep pulling your elbows behind you and squeeze
                    your shoulder blades together while keeping your back
                    straight. 5. Hold for 1 second and then slowly lower the bar
                    back to the starting position, with your arms extended and
                    the barbell plates just off the ground. 6. Repeat this for 5
                    repetitions and complete 5 sets.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Box>

        <Box mb={2} mt={2}>
          <Paper elevation={9}>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography variant="e2">
                  Exercise Name: Straight Leg Deadlift
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                maxheight="auto"
                image="https://res.cloudinary.com/dgsza9y0r/image/upload/v1652098886/StrongLiftr/0116_i56ylb.gif"
                alt="Visualization of the exercise motion."
              />
              <CardContent>
                <Typography variant="p1" color="text.primary">
                  <h3>Equipment Required: Barbell</h3>
                </Typography>
                <Typography variant="p1" color="text.primary" textAlign="left">
                  <p>
                    <strong>Instructions:</strong> 1. Start with the bar at hip
                    level and grip it with palms facing down. Keep shoulders
                    back and your back straight. Your back may slightly arch
                    during the movement. 2. Keep the bar close to your body as
                    you lower it toward your feet, pushing your hips back
                    throughout the movement. Your legs should be straight or
                    have a slight bend in the knees. You should feel the
                    movement in your hamstrings. 3. Drive your hips forward to
                    stand up tall, keeping the barbell in front of the thighs.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </>
      {/* {list} */}
    </>
  );
};
